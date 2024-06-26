import { Routes } from '@angular/router';
import { ApplicationRoutes } from './shared/enums/application-routes.enum';
import { LayoutComponent } from './layout/components/layout/layout/layout.component';

export const routes: Routes = [
      {
      path: ApplicationRoutes.Empty,
      loadComponent: () => import('./login/login.component'
      ).then(mod => mod.LoginComponent)
     },{
      path: ApplicationRoutes.layout,
      component: LayoutComponent,
      children: [
       {
        path: ApplicationRoutes.dashboard,
        loadComponent: () => import('./layout/components/layout/dashboard/dashboard.component'
        ).then(mod => mod.DashboardComponent)
       },
       {
        path: ApplicationRoutes.analytics,
        loadComponent: () => import('./layout/components/layout/analytics/analytics.component'
        ).then(mod => mod.AnalyticsComponent)
       },
       {
        path: ApplicationRoutes.products,
        loadComponent: () => import('./layout/components/layout/products/products.component'
        ).then(mod => mod.ProductsComponent)
       },
       {
        path: ApplicationRoutes.orders,
        loadComponent: () => import('./layout/components/layout/orders/orders.component'
        ).then(mod => mod.OrdersComponent)
       },
            ]




    },
  {
      path: ApplicationRoutes.darklight,
          loadComponent: () => import('./shared/dark-light_mode/dark-light_mode.component'
          ).then(mod => mod.DarkLight_modeComponent)
  }]
