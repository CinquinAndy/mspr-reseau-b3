import {FullFileBrowser} from 'chonky';

export const MyFileBrowser = () => {
        const files = [
            {
                id: '1',
                name: 'andyc_med.txt',
            },
            {
                id: '2',
                name: 'brevallf_med.txt',
            },
            {
                id: '3',
                name: 'mathisg_med.txt',
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
