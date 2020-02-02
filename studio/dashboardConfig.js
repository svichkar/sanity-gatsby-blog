export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e36a34a6caab673f9357fb2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-4n6u9gxh',
                  apiId: '6cff9573-aa88-42b8-9bf2-be7720ec52c4'
                },
                {
                  buildHookId: '5e36a34bc2ca7519ca8669c3',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-k6pxumm7',
                  apiId: '40715fab-ec40-486a-8057-839fbd578466'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/svichkar/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-k6pxumm7.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
