# Authentication

Authentication features are needed on almost every project, and developing them right takes time.
StartUI contains all the necessary screens to manage a complete authentication flow.
If you're using a JHipster backend, you don't have anything to do to have it working with your authentication system,
however if you're using another system, don't forget to connect the UI to it.

## Sign-up

The sign-up page can be found on the `app/account/register` route.  
Like every other pages, it's translated.  
It contains a form with four fields:
 - Language which is a select that will help the user choosing his preferred language, so that you can later display an
 adapted UI. You can check the (translation)[TODO] feature page to know more about this.
 It uses a constant containing the list of available languages along with their configuration (ltr, specific font size and so on).
 - Username which could be a unique user identifier (it's up to you and your authentication system). This field is validated
 to respect a pattern and length.
 - Email which is also validated using the Formiz email's validation pattern
 - Password which is validated to be not too short and not too long

<img src="/images/screenshots/sign-up-desktop.png"  alt="Sign-up page screenshot on desktop"/>
<img src="/images/screenshots/sign-up-mobile.png"  alt="Sign-up page screenshot on mobile"/>

Once the user registered, a success message is displayed asking him to check his emails.

## Login

The login page can be found on the `app/account/login` route.  
Like every other pages, it's translated.  
It contains a form with an email and a password field, which are both required. Error messages are already managed for you
when login succeeds or fails.

<img src="/images/screenshots/login-desktop.png"  alt="Login page screenshot on desktop"/>
<img src="/images/screenshots/login-mobile.png"  alt="Login page screenshot on mobile"/>

## Reset password flow

The reset password flow is a standard flow that contains two steps.

### Ask for a reset password link

The first step consists in asking to get a reset password link which will be sent by email. This is done on the 
`account/reset` route.
To do it, there's a page, accessible from the login page, which contains an email field. Starting to that point, there
are two scenario :
Either the email is known by your backend, then a success message with the next step's instructions is ready to be shown,
or the email isn't known and an error message is already implemented for you to use it.

### Reset the password



[//]: # (TODO disconnection and modal)

[//]: # (TODO faire une doc pour "comment connecter l'authentification à mon système d'authentification" ? avec différentes technos)