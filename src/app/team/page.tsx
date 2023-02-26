import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styled from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

// const styledP = styled.p`
//   font-family: ${inter};
//   font-size: 60px;
// `

export default function Home() {
  return (
    <main>
      <div>
        <p>
          THIS IS VERY NICE asdasd&nbsp;
          <code>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </main>
  )
}
