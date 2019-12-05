import tensorflow as tf
from tensorflow import keras
from keras.preprocessing.image import ImageDataGenerator
import matplotlib.pyplot as plt

import mtcnn

train_path_dir='./Dataset Famosos Senpai/Train/'
test_path_dir='./Dataset Famosos Senpai/Test/'
ruta_proyecto = "./Checkpoint"

entrenamiento_datagen = ImageDataGenerator(
		rescale=1./255,
		shear_range=0.3,
		zoom_range=0.3,
		horizontal_flip=True
)

validacion_datagen = ImageDataGenerator(
		rescale=1./255
)

imagen_entrenamiento = entrenamiento_datagen.flow_from_directory(
		train_path_dir,
		target_size=(100,100),
		batch_size=(32),
		class_mode='categorical',
		shuffle=True,
    seed=42
)

imagen_validacion = validacion_datagen.flow_from_directory(
		test_path_dir,
		target_size=(100,100),
		batch_size=(32),
		class_mode='categorical',
		shuffle=True,
    seed=42
)

from keras.models import Sequential
from keras import optimizers
from keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout

model = Sequential()

model.add(Conv2D(filters=16, kernel_size=(3,3), padding='same', activation='relu',input_shape=(100, 100,3)))
model.add(MaxPooling2D(pool_size=2))
model.add(Conv2D(filters=32, kernel_size=(3,3), padding='same', activation='relu'))
model.add(MaxPooling2D(pool_size=2))
model.add(Conv2D(filters=64, kernel_size=(2,2), padding='same', activation='relu'))
model.add(MaxPooling2D(pool_size=2))
model.add(Flatten())

model.add(Dense(50, activation='relu'))
model.add(Dropout(0.3))
model.add(Dense(4, activation='softmax'))

model.summary()

model.compile(loss='categorical_crossentropy', optimizer = "rmsprop", metrics=['accuracy'])

from keras.callbacks import ModelCheckpoint   
from keras.callbacks import EarlyStopping

#Defino callback
checkpointer = [EarlyStopping(monitor='val_loss', patience=2),ModelCheckpoint(filepath=ruta_proyecto + 'model.weights.best.hdf5', verbose=1, save_best_only=True)]
history = model.fit_generator(imagen_entrenamiento,steps_per_epoch=4, validation_data=imagen_validacion,callbacks=checkpointer,validation_steps=2,epochs=1)

train_loss, train_acc = model.evaluate(imagen_entrenamiento)
test_loss, test_acc = model.evaluate(imagen_validacion)

print('\nTrain accuracy:', train_acc)
print('\nTest accuracy:', test_acc)

# plot loss
plt.subplot(211)
plt.title('Cross Entropy Loss')
plt.plot(history.history['loss'], color='blue', label='train')
plt.plot(history.history['val_loss'], color='orange', label='test')

# plot accuracy
plt.subplot(212)
plt.title('Classification Accuracy')
plt.plot(history.history['acc'], color='blue', label='train')
plt.plot(history.history['val_acc'], color='orange', label='test')

plt.show()