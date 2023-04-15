# Django app

## Documentação passo-a-pass

- Criando o diretório:

```bash
mkdir nomeDiretório && cd nomeDiretório
```

- Criando o ambiente virtual (venv):

```bash
python3 -m venv venv
```

- Ativando o ambiente virtual:

```bash
source venv/bin/activate
```

- Ambiente virtual ativado?! hora de instalar o django:

```bash
pip install django
```

- Iniciando um projeto em django

```bash
django admin startproject nomeDoProjeto .
# o ponto no final cria a pasta no mesmo diretório.
```

## Configurações iniciais

- No arquivo **settings.py**, logo abaixo de **STATIC_URL = 'static/'** adicione:

```py
STATICFILES_DIRS = (os.path.join(BASE_DIR, 'templates/static'))
STATIC_ROOT = os.path.join('static')

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'
```

- Criando um app aparte para gerenciar clientes.

```bash
python3 manage.py startapp clientes
```

- Rodando o servidor.

```bash
python3 manage.py runserver
```

- Rodando as migrations

- Esse comando cria as migrasions 

```bash
python3 manage.py makemigrations
```

- Esse comando roda as migrations

```bash
python3 manage.py migrate
```