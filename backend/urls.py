# backend/urls.py
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # JWT Authentication endpoints
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # لاگین
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # رفرش توکن
    
    # Tasks API
    path('api/', include('tasks.urls')),
]