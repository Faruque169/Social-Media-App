from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Post


@csrf_exempt
def like_post(request, post_id):
    if request.method == "POST":
        post = Post.objects.get(id=post_id)
        post.likes += 1
        post.save()
        return JsonResponse({"success": True, "likes": post.likes})
    return JsonResponse({"success": False})
