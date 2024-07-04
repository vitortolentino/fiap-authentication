---
presentation:
  width: 1500
  height: 800
  theme: night.css
---

<!-- slide -->

# OAuth, OAuth2 e JWT

<!-- slide -->

## O que é OAuth?

OAuth (Open Authorization) é um protocolo de autorização que permite que aplicativos de terceiros acessem recursos do usuário sem que o usuário precise compartilhar suas credenciais. Ele fornece um método seguro e padronizado para acessar APIs.

<!-- slide -->

## O que é OAuth2?

OAuth2 é a segunda versão do protocolo OAuth. Ele é mais flexível e seguro, proporcionando uma experiência de usuário mais simples e suporte para diferentes tipos de clientes, como web, desktop e dispositivos móveis. OAuth2 utiliza tokens de acesso que representam a autorização do usuário para acessar determinados recursos.

<!-- slide -->

### Principais Componentes do OAuth2

- **Resource Owner (Proprietário do Recurso)**: Usuário que concede permissão para acessar seus recursos.
- **Client (Cliente)**: Aplicação que solicita acesso aos recursos do usuário.
- **Authorization Server (Servidor de Autorização)**: Servidor que autentica o usuário e emite tokens de acesso.
- **Resource Server (Servidor de Recursos)**: Servidor que hospeda os recursos protegidos e verifica a validade dos tokens de acesso.

<!-- slide -->

## O que é JWT?

JWT (JSON Web Token) é um padrão aberto que define uma forma compacta e autocontida para transmitir informações entre partes como um objeto JSON. Ele é amplamente utilizado para autenticação e troca de informações de forma segura.

<!-- slide -->

### Estrutura de um JWT

1. **Header**: Contém informações sobre o tipo de token e o algoritmo de assinatura.
2. **Payload**: Contém as declarações (claims). Essas declarações podem ser informações sobre o usuário e outros dados.
3. **Signature**: É usada para verificar se o token não foi alterado.

Um JWT típico se parece com isso:

<!-- slide -->

**Fale Comigo:** [Meu LinkedIn](https://www.linkedin.com/in/vitor-rodrigues-dev/)
