# Angular-basic-2023-routing

## Lesson-01
- [AppRoutingModule](src/app/app-routing.module.ts)

## Lesson-02
- [AppRoutingModule](src/app/app-routing.module.ts)
- [HomeComponent](src/app/page/home/home.component.ts)
- [TicketsComponent](src/app/page/tickets/tickets.component.ts)
- [AboutComponent](src/app/page/about/about.component.ts)

## Lesson-03
- [ConfigService](src/app/service/config.service.ts)
- [NavComponent](src/app/common/nav/nav.component.ts)

## Lesson-04
- Move the logic and the view from the AppComponent to the TicketsComponent.
- [AppComponent](src/app/app.component.ts)
- [TicketsComponent](src/app/page/tickets/tickets.component.ts)

## Lesson-05
- Set the routerLinkActive and the routerLinkActiveOptions directives.
- [NavComponent](src/app/common/nav/nav.component.ts)
- [NavComponent SCSS](src/app/common/nav/nav.component.scss)

## Lesson-06
- Generate a module: `ng generate module ticket --route ticket --module app.module`
- Shared module: `ng generate module shared --flat`
- Move the TicketsModule into the new ticket directory.
- Move all common directives, pipes into the shared module.
- Import shared module into the TicketModule.

## Lesson-07
- `ng g c ticket/ticket-editor --module ticket.module`
- [TicketRoutingModule](src\app\ticket\ticket-routing.module.ts)
- [TicketsComponent](src/app/page/tickets/tickets.component.ts)


