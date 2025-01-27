This document outlines the procedure to deploy a Django-based chatbot application on using ngrok for public access. This setup involves configuring Django settings, setting up ngrok for tunneling, and starting the Django development server. 
Prerequisites
Python Environment: Ensure that Python and pip are installed.
Dependencies: Install the necessary Python libraries:
pip install django pyngrok

1. Configure Django Settings
Update ALLOWED_HOSTS and CSRF_TRUSTED_ORIGINS
To allow access from ngrok, modify the Django settings file (settings.py). Add the ngrok public URL to the ALLOWED_HOSTS:
# settings.py
ALLOWED_HOSTS = ['<your-ngrok-url>']

In addition, one can set ALLOWED_HOSTS to [‘*’] to allows requests from any domain, which is useful for development purposes but should be restricted to specific domains in production to ensure security.
2. Set Up Ngrok
Create Ngrok Setup Script
Save the following Python script as setup_ngrok.py. This script will configure and start ngrok to tunnel requests to your local Django server.
from pyngrok import ngrok
ngrok.kill()  # Terminate any existing ngrok processes
auth_token = "<your-ngrok-auth-token>" 
ngrok.set_auth_token(auth_token)
ngrok.connect(8000)  # Start a tunnel to port 8000

3. Start the Django Development Server
Run the Django Server by executing this script:
python manage.py runserver 8000

4. Access the Chatbot
Obtain the Ngrok URL
Upon successful execution of the ngrok setup script, ngrok will provide a public URL that tunnels to your local server. This URL will appear in the output of the script, for example:
NgrokTunnel: "https://<your-ngrok-url>" -> "http://localhost:8000"
Visit the Public URL
Open the provided ngrok URL in the web browser to access and interact with our Django-built chatbot application.

