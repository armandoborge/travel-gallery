module.exports = {
    armando: {
        profileName: 'Armando Borge',
        profileImage: 'armando.jpg',
        appName: 'Photo Gallery',
        appTheme: 'BigStone',
        metaDescription: 'Armando Borge Personal Website',
        metaKeywords: 'Armando Borge, Software, Travels, Programming, Javascript, HTML, CSS, Web',
        homeDescription:
            '<p>After some time traveling with my girlfriend I decided to create a photo gallery of my favorite places. I couldn\'t find a design of my liking, so I created an application in Javascript using <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" title="React">React</a> to build what I had in my mind and have a little fun in the process.</p>' +
            '<p>The source code is available on <a href="https://github.com/armandoborge/travel-gallery" target="_blank" rel="noopener noreferrer" title="Travel Gallery GitHub">GitHub</a>.<br/>On the way I\'ll be making improvements and uploading more pictures.</p>',
        homeLinks: [
            {
                url: 'http://armandoborge.com',
                icon: 'fas fa-code',
                text: 'About Me',
                title: 'Armando Borge Personal Website',
                isExternal: true
            },
            {
                url: '/gallery/argentina/los-glaciares/',
                icon: 'fas fa-camera',
                text: 'Pictures',
                title: 'Photos Collection',
                isExternal: false
            },
            {
                url: 'https://github.com/armandoborge/travel-gallery',
                icon: 'fas fa-code-branch',
                text: 'GitHub',
                title: 'GitHub Repository',
                isExternal: true
            }
        ]
    },
    melisa: {
        profileName: 'Melisa Redondo',
        profileImage: 'melisa.jpg',
        appName: 'Travel Gallery',
        appTheme: 'ClamShell',
        metaDescription: 'Melisa Redondo - Artist, Traveller, Yogi & Healer',
        metaKeywords: 'Melisa Redondo, Art, Travels, Yoga, Healing, Reiki, Painting',
        homeDescription:
            '<p>This gallery of our first year traveling together proves that we humans instead of fall in love can raise in love.</p>' +
            '<p>The code of this gallery made by <a href="http://armandoborge.com/" target="_blank" rel="noopener noreferrer" title="Armando Borge">Armando</a> is available on <a href="https://github.com/armandoborge/travel-gallery" target="_blank" rel="noopener noreferrer" title="Travel Gallery GitHub">GitHub</a>. We hope continue traveling and sharing our creations and adventures with the world.</p>',
        homeLinks: [
            {
                url: 'http://melisaredondo.com',
                icon: 'fas fa-heart',
                text: 'My Website',
                title: 'Melisa Redondo Personal Website',
                isExternal: true
            },
            {
                url: '/gallery/argentina/el-calafate/',
                icon: 'fas fa-camera',
                text: 'Pictures',
                title: 'Photos Collection',
                isExternal: false
            },
            {
                url: 'https://github.com/armandoborge/travel-gallery',
                icon: 'fas fa-code',
                text: 'GitHub',
                title: 'GitHub',
                isExternal: true
            }
        ]
    }
};