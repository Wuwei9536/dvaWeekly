export default [
  // {
  //   path: '/login',
  //   exact: true,
  //   component: () => import('../routes/logIn/view'),
  // },
  {
    path: '/', // layOut
    component: () => import('../routes/layOut/view'),
    models: () => [
      import('../models/model-layOut')
    ],
    routes: [
      {
        path: '/', // weeklyList
        exact: true,
        component: () => import('../routes/weeklyList/view'),
        models: () => [
          import('../models/model-weeklyList')
        ]
      },
      {
        path: '/edit',
        exact: true,
        component: () => import('../routes/edit/view'),
        models: () => [
          import('../models/model-edit')
        ]
      },
      {
        path: '/details',
        exact: true,
        component: () => import('../routes/info/view'),
        models: () => [
          import('../models/model-info')
        ]
      },
      {
        path: '/staff',
        exact: true,
        component: () => import('../routes/staffList/view'),
      }
    ]
  },
];