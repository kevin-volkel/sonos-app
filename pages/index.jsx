import Image from 'next/image'
import { Card } from 'semantic-ui-react'
import Playback from './components/Playback'

export default function Home() {
  return <>
    <div className="everything">
      <Playback />
    </div>
  </>
}
