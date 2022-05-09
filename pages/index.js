import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import FeedbackForm from '@components/FeedbackForm'
import JokeBlock from '@components/JokeBlock'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome to H-Street Media</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to H-Street" />
        <p className="description">
          We welcome you to H-Street Media.   We are still working on our site. Check back soon.
        </p>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  )
}
