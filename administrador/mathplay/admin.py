from django.contrib import admin
from .models import NivelAcademico, Grado, Curso, Sesion, Usuario, Puntaje

admin.site.register(NivelAcademico)
admin.site.register(Grado)
admin.site.register(Curso)
admin.site.register(Sesion)
admin.site.register(Usuario)
admin.site.register(Puntaje)
