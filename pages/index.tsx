import Layout from "../components/layout"
import {setChonkyDefaults} from 'chonky';
import {ChonkyIconFA} from 'chonky-icon-fontawesome';
// Somewhere in your `index.ts`:
setChonkyDefaults({iconComponent: ChonkyIconFA});

export default function IndexPage() {
  return (
    <Layout>
      <h1>Chatelet - File Explorer</h1>
      <p>
        Bienvenue dans l'application d'exploration de fichier de la clinique Chatelet !
      </p>
    </Layout>
  )
}
