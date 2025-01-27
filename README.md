# BUILDING A RAG BASED QUESTION–ANSWERING MODEL FOR VIETNAM CIVIL CODE

### Author:

- Lieu Dang Khoa - 510K0140
- Nguyen Minh Chi - 52000189

### Advised by:

Dr. Tran Luong Quoc Dai

# Table of contents

# 1. Architecture

![alt text](<Advanced RAG.png>)

# 2. Components

**Project structure**

---
project_root/
├── source/
│   ├── back-end/
│   │   ├── rag_pipeline.py               <- Contains RAG pipeline implementation
│   │   ├── prompts.py                    <- Contains prompt helpers for LLMs
│   │   └── api.py                        <- Contains FastAPI implementation
│   ├── front-end/
│   │   ├── ver1/                         <- Django frontend
│   │   ├── ver2/                         <- Next.js frontend
│   ├── evaluation/                       <- Evaluation scripts
│   └── README.md                         <- Project overview and instructions
├── report/
│   ├── TranLuongQuocDai_520k0140_52000189_BaoCao.pdf                 <- Final report in PDF format
│   └── TranLuongQuocDai_520k0140_52000189_BaoCao.docx                <- Final report in Word format
└── resources/
    ├── models/                           <- Saved models
    ├── evaluation_results/               <- Evaluation results of the models
    └── dataset/                          <- Datasets used in the project
---

# 3. Embeddings and LLMs

## 3.1 Download embedding model

Use `git clone` to download the BAAI/bge-m3 and BAAI/bg2-small-en-v1.5 from HuggingFace
Link:

- bge-m3: https://huggingface.co/BAAI/bge-m3
- bg3-small: https://huggingface.co/BAAI/bge-small-en-v1.5

![alt text](image-1.png)

## 3.2 LLMs

- **PhoGPT**: a 4B parameter model specifically trained on Vietnamese
  data, making it well-suited for Vietnamese language understanding.
  Link: https://huggingface.co/chillies/phogpt-legal-chat
- **Vistral**: a 7B parameter model known for its strong performance on
  various Vietnamese language tasks, such as question answering, text
  summarization,..
  Link: https://huggingface.co/chillies/vistral-7b-legal-chat-final
- **Vinallama**: a 7B parameter model, also demonstrate strong
  performance on Vietnamese text tasks and exhibiting high accuracy in
  legal document analysis.
  Link: https://huggingface.co/chillies/vinallama-7b-legal-chat-final

To download model, use `git clone` command:

```
git clone <link-to-model>
```

## 3.3 Ollama for serving

To serve these models, first of all we need to configure Ollama:

```code
curl -fsSL https://ollama.com/install.sh | sh
```

After downloading Ollama, we configure Modelfile:

```
FROM <path-to-model-on-local-machine>

TEMPLATE """
Bạn là một chuyên viên tư vấn pháp luật Việt Nam. Bạn có nhiều năm kinh nghiệm và kiến thức chuyên sâu. Bạn sẽ cung cấp câu trả lời về pháp luật, tư vấn luật pháp cho các câu hỏi của User.

{{ if .Prompt }}
## Câu hỏi:
{{ .Prompt }}{{end}}

## Trả lời:"""

PARAMETER num_keep 24
PARAMETER temperature 0
PARAMETER stop "<s>"
PARAMETER stop "</s>"
PARAMETER stop "## Câu hỏi:"
PARAMETER stop "## Trả lời:"
PARAMETER stop "[INST]"
PARAMETER stop "[/INST]"
```

Open the terminal, and create model:

```
ollama create <model-name> -f <model-file-path>
```

To verify if the model is ready or not, use the command:

```
ollama list
```

if ready, the model will appear in the list

For efficient serving, we recommend running on linux with GPU L4

# 4. Front-end

## 4.1 Version 1: Django

Prerequisites
Python Environment: Ensure that Python and pip are installed.
Dependencies: Install the necessary Python libraries:
pip install django pyngrok

1. Set Up Ngrok
   Create Ngrok Setup Script
   Save the following Python script as setup_ngrok.py. This script will configure and start ngrok to tunnel requests to your local Django server.
   """
   from pyngrok import ngrok
   ngrok.kill() # Terminate any existing ngrok processes
   auth_token = "<your-ngrok-auth-token>"
   ngrok.set_auth_token(auth_token)
   ngrok.connect(8000) # Start a tunnel to port 8000
   """

2. Configure Django Settings
   Update ALLOWED_HOSTS and CSRF_TRUSTED_ORIGINS
   To allow access from ngrok, modify the Django settings file (settings.py). Add the ngrok public URL to the ALLOWED_HOSTS:
   ALLOWED_HOSTS = ['<your-ngrok-url>']

In addition, one can set ALLOWED_HOSTS to ['*'] to allows requests from any domain, which is useful for development purposes but should be restricted to specific domains in production to ensure security.

3. Start the Django Development Server
   Run the Django Server by executing this script:
   """
   python manage.py runserver 8000
   """

4. Access the Chatbot
   Obtain the Ngrok URL
   Upon successful execution of the ngrok setup script, ngrok will provide a public URL that tunnels to your local server. This URL will appear in the output of the script, for example:
   NgrokTunnel: "https://<your-ngrok-url>" -> "http://localhost:8000"
   Visit the Public URL
   Open the provided ngrok URL in the web browser to access and interact with our Django-built chatbot application.

## 4.2 Version 2: nextjs

In case you cannot run version 1, try v2 instead.

To Use this version, you need to run `api.py' in the folder `/back-end`

```
uvicorn api:app_api --port 8080
```

The app will run on the port 8080, then copy the API link and past in the variable `url` in `front-end/ver2/src/components/Chatbot.jsx`

In ver2 folder, run `npm run dev` and wait for the app starting
![alt text](image.png)
