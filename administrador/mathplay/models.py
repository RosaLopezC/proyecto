from django.db import models
from django.utils import timezone

class NivelAcademico(models.Model):
    nombre = models.CharField(max_length=255)

    def __str__(self):
        return self.nombre
    
class Grado(models.Model):
    nivel_academico = models.ForeignKey(NivelAcademico, on_delete=models.CASCADE)
    nombre_grado = models.CharField(max_length=255)

    def __str__(self):
        return self.nombre_grado

class Curso(models.Model):
    titulo = models.CharField(max_length=255)
    grado = models.ForeignKey(Grado, on_delete=models.CASCADE)

    def __str__(self):
        return self.titulo

class Sesion(models.Model):
    nombre = models.CharField(max_length=255)
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
    imagen = models.CharField(max_length=255)
    ruta = models.CharField(max_length=255)

    def __str__(self):
        return self.nombre

class Usuario(models.Model):
    email = models.EmailField(unique=True)
    nombre = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    apellido = models.CharField(max_length=255, blank=True, null=True)
    fecha_nacimiento = models.DateField(blank=True, null=True)
    provider = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.nombre
    
class Puntaje(models.Model):
    usuario = models.ForeignKey(Usuario, related_name='puntajes', on_delete=models.CASCADE)
    puntaje = models.IntegerField()
    fecha = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f'{self.usuario.nombre} - {self.puntaje} puntos'
