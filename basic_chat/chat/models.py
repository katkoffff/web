from django.db import models
from django.contrib.auth.models import User

class ChatUser(models.Model):
    chatUser = models.OneToOneField(User, on_delete=models.CASCADE)
    userImage = models.ImageField(width_field=25, height_field=25)
    def __str__(self):
        return f'{self.user.username}'
