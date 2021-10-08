from django.shortcuts import render


def home (request):
    context = {
        'username':['Ardak', 'User1', 'User2'],
        'password': '1234'
    }
    return render(request, 'project1.html', context=context)

def accept_post(request):
    print(request.POST)
    return render(request,"project1.html")

# Create your views here.
