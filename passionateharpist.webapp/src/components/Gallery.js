import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Lightbox from 'react-image-lightbox';
import { useTheme } from '@material-ui/core/styles';

export function Gallery() {

    const [isOpen, setIsOpen] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const images = [
        { src: '/1.jpg' },
        { src: '/2.jpg' },
        { src: '/3.jpg' },
        { src: '/4.jpg' },
        { src: '/5.jpg' },
        { src: '/6.jpg' },
        { src: '/7.jpg' },
        { src: '/8.jpg' },
        { src: '/9.jpg' },
        { src: '/10.jpg' },
        { src: '/11.jpg' },
        { src: '/12.jpg' },
        { src: '/13.jpg' },
        { src: '/14.jpg' },
        { src: '/15.jpg' },
        { src: '/16.jpg' },
        { src: '/17.jpg' },
        { src: '/18.jpg' },
        { src: '/19.jpg' },
        { src: '/20.jpg' },
        { src: '/21.jpg' },
        { src: '/22.jpg' },
        { src: '/23.jpg' },
        { src: '/24.jpg' },
        { src: '/25.jpg' },
        { src: '/26.jpg' },
        { src: '/27.jpg' },
        { src: '/28.jpg' },
        { src: '/29.jpg' },
        { src: '/30.jpg' },
        { src: '/31.jpg' },
        { src: '/32.jpg' },
        { src: '/33.jpg' },
        { src: '/34.jpg' },
        { src: '/35.jpg' },
        { src: '/36.jpg' },
        { src: '/37.jpg' },
        { src: '/38.jpg' }
    ];

    const openImage = (index) => {
        setIsOpen(true);
        setImageIndex(index);
    };

    const theme = useTheme();
    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
            paddingTop: theme.spacing(10)
        }
    });

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ImageList variant="masonry" cols={2} gap={8}>
                {images.map((item, index) =>
                    <ImageListItem key={index}>
                        <img srcSet={item.src} alt="Passionate Harpist" loading="lazy" onClick={() => openImage(index)} />
                    </ImageListItem>)}
            </ImageList>
            {isOpen &&
                <Lightbox
                    mainSrc={images[imageIndex].src}
                    nextSrc={images[(imageIndex + 1) % images.length].src}
                    prevSrc={images[(imageIndex + images.length - 1) % images.length].src}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setImageIndex((imageIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setImageIndex((imageIndex + 1) % images.length)}
                />}
        </div>
    );
}