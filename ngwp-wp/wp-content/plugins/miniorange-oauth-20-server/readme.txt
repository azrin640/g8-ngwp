=== WordPress OAuth Server ( OAuth Provider ) ===
Contributors: cyberlord92,oauth
Tags: oauth, OAuth server, OAuth login, OAuth Provider, OAuth API
Requires at least: 3.0.2
Tested up to: 5.1.0
Stable tag: 2.6.1
License URI: http://miniorange.com/usecases/miniOrange_User_Agreement.pdf

OAuth Server allows Single Sign-On to your client apps with WordPress. It allows you to use WordPress as your OAuth Server and access OAuth API’s.

== Description ==

OAuth Server (OAuth 2.0 Server) allows Single Sign On to your client apps with wordpress. It allows you to use WordPress as your OAuth Server and access OAuth API’s. The primary goal of this OAuth server/Oauth Provider plugin is to allow users to interact with WordPress and Jetpack sites without requiring them to store sensitive credentials. 

The OAuth Server plugin is created in WordPress by virtue of which, user can work with OAuth2 compliant client. These client applications can be Salesforce, Slack or any other third party applications which support OAuth Server allows Single Sign On to client applications with wordpress credentials. It allows you to use WordPress as your OAuth Server and access OAuth APIs.

You can easily configure an OAuth server to protect your API with access tokens, or allow clients to request new access tokens and refresh them.

This plugin provide support to Rocket.chat, Invision Community and other custom OAuth and OpenID Connect client applications. OAuth Server plugin works with any OAuth client that conforms to the OAuth 2.0 and OpenID Connect 1.0 standard.

= Features =

* Supports Multiple OAuth Client
* Master Switch - It allows you to block or unblock API calls between OAuth Clients and Server 
* Block Unauthenticated Request To The REST API
* Token Length - Allows you to change the token length
* Redirect/Callback URI Validation - You can Enable/disable this feature, based on dynamic redirect to a different pages for certain conditions.
* OIDC Support - Supports OpenID Connect protocol
* Token Lifetime - Allow you to decide the token expiry time
* JWT Support
* Error Logging 
* Enforce State Parameter - Based on client configuration, you can enable or disable state parameter
* Supports All Grant Types : Authorization Code Grant, Implicit Grant, Password Grant, Client Credentials Grant, Refresh Token Grant
* Server Response - Allows you to customize the attributes need to be sent in server response
* Extended OAuth API Support
* Multi-Site Support
* JWT Signing Algorithm - Supports 


A grant is a method of acquiring an access token. Deciding which grants to implement depends on the type of client the end user will be using, and the experience you want for your users.

= We support following grants: =

* Authorization code grant: This code grant is used when there is a need to access the protected resources on behalf of another third party application.

* Implicit grant: This grant relies on resource owner and registration of redirect uri. In authorization code grant user needs to ask for authorization and access token each time, but here access token is granted for a particular redirect uri provided by client using a particular browser.

* Client credential grant: This grant type heads towards specific clients, where access token is obtained by client by only providing client credentials. This grant type is quiet confidential.

* Resource owner password credentials grant: This type of grant is used where resource owner has trust relationship with the client. Just by using username and password, provided by resource owner authorization and authentication can be achieve

* Refresh token grant: Access tokens obtained in OAuth flow eventually expire. In this grant type client can refresh his or her access token.

= How REST API is protected by OAuth Server =

Rest API are very much open to interact. Creating posts, getting information of users and much more is readily available. If API is protected by OAuth Server plugin secure access to APIs can be achieved. The token obtained in authentication can be intercepted and used. Protection can be achieved by building custom endpoints and allowing custom authentication.


== Installation ==

= From your WordPress dashboard =
1. Visit `Plugins > Add New`
2. Search for `OAuth 2.0 server`. Find and Install `OAuth 2.0 server`
3. Activate the plugin from your Plugins page

= From WordPress.org =
1. Download OAuth 2.0 server.
2. Unzip and upload the `miniorange-oauth-login` directory to your `/wp-content/plugins/` directory.
3. Activate miniOrange OAuth from your Plugins page.

= Once Activated =
1. Go to `Settings-> miniOrange OAuth -> Configure OAuth`, and follow the instructions
2. Go to `Appearance->Widgets` ,in available widgets you will find `miniOrange OAuth` widget, drag it to chosen widget area where you want it to appear.
3. Now visit your site and you will see login with widget.

== Frequently Asked Questions ==
= I need to customize the plugin or I need support and help? =
Please email us at info@miniorange.com or <a href="http://miniorange.com/contact" target="_blank">Contact us</a>. You can also submit your query from plugin's configuration page.

== Screenshots ==
1. Add OAuth Client
2. Get Client ID and Client Secret
3. General settings
4. Advanced settings and other Premium features
5. Server Response
6. Endpoints
7. Frequently Asked Questions

== Changelog ==

= 2.6.1 =
* Fixed conflicts for function generateRandomString()

= 2.6.0 =
* Advertised new features as per new Licensing Plan

= 2.5.6 =
* Added Compatibility for Rocket.chat

= 2.5.5 =
* Fixed OTP related issue

= 2.5.4 =
* Updated Licensing Plan

= 2.5.3 =
* Added Visual Tour fixes

= 2.5.2 =
* Added bugfixes

= 2.5.1 =
* Added missing files

= 2.5.0 =
* New Features
* Major UI Revamp
* Added Feature Tour

= 2.4.0 =
* Compatibility with WordPress 5.1

= 2.3.0 =
* Added Feedback Form and Updated UI

= 2.2.1 =
* Added support for Invision Community and Rocket.chat

= 2.2.0 =
* Updated UI

= 2.1.0 =
* Fixed the PHP7.2 Compatibility issue

= 2.0.3 =
* Changes in the title

= 2.0.2 =
* Added features

= 2.0.1 =
* Added support for multiple client

= 1.0.1 =
* Initial Release

== Upgrade Notice ==

= 2.0.3 =
* Changes in the title

= 2.0.2 =
* Added features

= 2.0.1 =
* Added support for multiple client

= 1.0.1 =
* Initial Release
* Initial Release
