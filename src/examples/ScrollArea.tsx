
import React from 'react'; 
import { ScrollArea } from 'primereact/scrollarea';


export default function ScrollAreaDemo() {
    const images = [
        {
            itemImageSrc: 'https://primefaces.org/cdn/primevue/images/nature/nature1.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/nature/nature1.jpg',
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: 'https://primefaces.org/cdn/primevue/images/nature/nature2.jpg',
            thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/nature/nature2.jpg',
            alt: 'Description for Image 2',
            title: 'Title 2'
        }
    ]

    return (
        <div >
            {/* Basic
            ScrollPanel is defined using dimensions for the scrollable viewport. */}
            <ScrollArea style={{ width: '600px', height: '200px' }}>
                <ScrollArea.Viewport>
                    <ScrollArea.Content>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                        <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                        <p className="m-0">
                            Quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
                            molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat
                        </p>
                    </ScrollArea.Content>
                </ScrollArea.Viewport>
                <ScrollArea.ThumbY />
            </ScrollArea>

            {/* Horizontal
            ScrollArea supports horizontal scrolling for content that extends beyond the horizontal viewport. */}
            <ScrollArea className="border border-surface-200 dark:border-surface-700 rounded-md" style={{ width: '632px', height: '200px' }}>
                <ScrollArea.Viewport className="p-4">
                    <ScrollArea.Content>
                        <div className="flex w-max gap-4" style={{ minWidth: '3000px' }}>
                            {images &&
                                images.map((image, index) => (
                                    <figure key={index} className="shrink-0">
                                        <img width={150} height={100} src={image.itemImageSrc} alt={image.title} className="w-full object-cover rounded-md" />
                                        <figcaption className="pt-2 text-xs">
                                            Photo by <span className="font-semibold">{image.title}</span>
                                        </figcaption>
                                    </figure>
                                ))}
                        </div>
                    </ScrollArea.Content>
                </ScrollArea.Viewport>
                <ScrollArea.ThumbX />
            </ScrollArea>

        </div>
    )
}
        