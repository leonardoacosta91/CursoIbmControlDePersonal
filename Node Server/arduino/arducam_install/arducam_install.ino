// ArduCAM ESP32S UNO PSRAM demo
// Web: http://www.ArduCAM.com
// This program is a demo of how to use most of the functions
// of the library with esp32 camera, and can run on any Arduino platform.
//
// This demo needs to be used in combination with PC software.
// It can operation face detection and face recognition,the image through the web page to view,
// and send commands through the web page to adjust resolution,brightness, exposure time and other parameters.
// This program requires Arduino IDE 1.8.1 compiler or above

#include "arducam_esp32s_camera.h"
#include <WiFi.h>
#include <HTTPClient.h>


/*  OV2640 : PIXFORMAT_JPEG
 *  OV7725 : PIXFORMAT_RGB565
 *  OV7670 : PIXFORMAT_RGB565
 */
 

const char* ssid = "nqCra";
const char* password = "falta14resto";

const char* ap_ssid = "nqCra_arducam";
const char* ap_password = "falta14resto";

void startCameraServer();
uint8_t wifi_mode = 1;   //1:station mode, 0:access point mode


void setup() {
  Serial.begin(115200);
  Serial.setDebugOutput(true);
  Serial.println();

  // camera init
  esp_err_t err = arducam_camera_init(PIXFORMAT_JPEG);
  if (err != ESP_OK) {
      Serial.printf("Camera init failed with error 0x%x", err);
      return;
  }
  else
      Serial.printf("Camera init success");
  //set frame size 
  //arducam_set_resolution(FRAMESIZE_QVGA);
    sensor_t * s = arducam_camera_sensor_get();
    s->set_framesize(s, FRAMESIZE_QVGA);
  if(wifi_mode){
    WiFi.begin(ssid, password);
  
    while (WiFi.status() != WL_CONNECTED) {
      delay(500);
      Serial.print(".");
    }
    Serial.println("");
    Serial.println("WiFi connected");
  
    startCameraServer();
  
    Serial.print("Camera Ready! Use 'http://");
    Serial.print(WiFi.localIP());
    Serial.println("' to connect");
  }
  else{
    Serial.begin(115200);
    Serial.println();
    Serial.println("Configuring access point...");
  
    // You can remove the password parameter if you want the AP to be open.
    WiFi.softAP(ap_ssid, ap_password);
    IPAddress myIP = WiFi.softAPIP();
    Serial.print("AP IP address: ");
    Serial.println(myIP);
    startCameraServer();
    
    Serial.println("Server started");
    }
}

void loop() {
  
  if(WiFi.status()== WL_CONNECTED){   //Check WiFi connection status   
    HTTPClient http;     
     http.begin("http://jsonplaceholder.typicode.com/posts");  //Specify destination for HTTP request
     http.addHeader("Content-Type", "text/plain");             //Specify content-type header
     int httpResponseCode = http.POST("POSTING from ESP32");   //Send the actual POST request
     if(httpResponseCode>0){
      String response = http.getString();                       //Get the response to the request
      Serial.println(httpResponseCode);   //Print return code
      Serial.println(response);           //Print request answer
     }else{
      Serial.print("Error on sending POST: ");
      Serial.println(httpResponseCode);
     }
     http.end();  //Free resources   
   }else{
      Serial.println("Error in WiFi connection");   
   }
    delay(10000);  //Send a request every 10 seconds
}
