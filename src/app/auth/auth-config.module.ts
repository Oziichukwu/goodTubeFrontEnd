import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'https://dev-y9-lnb50.us.auth0.com',
            redirectUrl: window.location.origin,
            clientId: 'KCJpYFDi0ltNIOdju1bLJWnxnOrjUhm7',
            scope: 'openid profile offline_access email',
            responseType: 'code',
            silentRenew: true,
            useRefreshToken: true,
            secureRoutes:['http://localhost:8080/'],
            customParamsAuthRequest:{
              audience: 'http://localhost:8080/'
            }
        }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
