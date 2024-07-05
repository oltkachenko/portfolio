import {defineField} from 'sanity'

export default defineField({
    name: 'block.image',
    type: 'object',
    title: 'Image',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: true}
        },
        {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
        }
    ],
    preview: {
        select: {
            title: 'title',
            image: 'image.asset.url',
        },
        prepare(selection) {
            console.log( selection);
            
            const {title, image} = selection
            
            return {
                title: title,
                media: <img src={image} alt=''/>
            }
        },
    },
})
