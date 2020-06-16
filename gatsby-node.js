const fs = require('fs')
const yaml = require('js-yaml')
exports.createPages = ({ actions }) => {
    const { createPage } = actions
    const ymlDoc = yaml.safeLoad(
        fs.readFileSync('./content/works.yaml', 'utf-8')
    )
    ymlDoc.forEach(element => {
        createPage({
            path: element.path,
            component: require.resolve('./src/templates/workTemplate.js'),
            context: {
                name: element.name,
                date: element.date,
                description: element.description,
            },
        })
    })
}
