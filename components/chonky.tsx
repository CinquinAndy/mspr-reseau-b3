import {FullFileBrowser} from 'chonky';

export const MyFileBrowser = () => {
        const files = [
            {
                id: '1',
                name: 'fiche_1.pdf',
            },
            {
                id: '2',
                name: 'fiche_2.pdf',
            },
            {
                id: '3',
                name: 'fiche_3.pdf',
            },
            {
                id: '4',
                name: 'fiche_4.pdf',
            },
            {
                id: '5',
                name: 'fiche_5.pdf',
            },
            {
                id: '6',
                name: 'fiche_6.pdf',
            },
            {
                id: '7',
                name: 'fiche_7.pdf',
            },
            {
                id: '8',
                name: 'fiche_8.pdf',
            },
            {
                id: '9',
                name: 'fiche_9.pdf',
            },
            {
                id: 'mcd',
                name: '_tuto.pdf',
            },
        ];
        const folderChain = [
            {id: 'xcv', name: 'Fiches médicales', isDir: true},
        ];
        return (
            <div style={{height: 600}}>
                <FullFileBrowser files={files} folderChain={folderChain}/>
            </div>
        );
    }
;
