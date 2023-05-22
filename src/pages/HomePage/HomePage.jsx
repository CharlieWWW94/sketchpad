import PageContainer from "../../components/PageContainer/PageContainer";
import Hero from "../../components/Hero/Hero";
import scrollArrow from "../../assets/right-arrow.svg"
export default function HomePage() {
  return (
    <PageContainer>
      <div style={{ width: '100%', display: 'flex', flex: 'auto' }}>
        <Hero />
      </div>
      <div style={{ marginTop: -60, marginRight: 30, display: 'flex', justifyContent: 'flex-end' }}>
        <p className="subtitle" style={{ color: 'white', zIndex: 3 }}>Scroll to learn more</p>
        <img src={scrollArrow} style={{ width: '40px', filter: 'invert(100%)', rotate: '90deg' }} />
      </div>

    </PageContainer>
  )
}
