from django.contrib import admin
from .models import Todo

# Register the Todo model so it's visible in the admin
admin.site.register(Todo)