# Generated by Django 5.1.1 on 2024-10-08 16:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('route', '0004_alter_routestop_unique_together'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='routestop',
            unique_together={('route', 'order')},
        ),
    ]
