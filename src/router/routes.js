const routes = [
    {
        path: '/',
        component: () => import('layouts/MyLayout.vue'),
        meta: {
            auth: true,
            title: 'gpx to kml'
        },
        children: [
            {
                path: '',
                name: 'index',
                component: () => import('pages/Index.vue')
		},
            {
                path: '/info/',
                name: 'info',
                component: () => import('pages/Info.vue'),
		},
            {
                path: '/exchange/',
                name: 'exchange',
                component: () => import('pages/Exchange.vue'),
		},
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () => import('pages/Error404.vue')
    })
}

export default routes
