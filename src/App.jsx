import { useEffect } from 'react'
import ArchitecturalScene from './ArchitecturalScene'

const painStats = [
  {
    value: '67%',
    title: 'Người trẻ gặp khó khăn trong quản lý tài chính cá nhân',
    detail: 'Quản lý tiền vẫn đang là một kỹ năng nhiều người trẻ chưa có công cụ đủ gần gũi để duy trì mỗi ngày.',
  },
  {
    value: '2/3',
    title: 'Gen Z đang theo đuổi các mục tiêu tài chính cụ thể',
    detail: 'Họ muốn tiết kiệm, đầu tư, đi du lịch hoặc mua sắm có kế hoạch nhưng thiếu hệ thống theo dõi dễ hiểu.',
  },
  {
    value: '+40-60%',
    title: 'CAC fintech và digital banking tăng mạnh giai đoạn 2023-2025',
    detail: 'Ngân hàng cần một điểm chạm tự nhiên hơn để thu hút người trẻ thay vì chỉ chạy quảng cáo và bán sản phẩm.',
  },
]

const problems = [
  'Nhập liệu thủ công tốn thời gian và dễ bỏ cuộc.',
  'Dữ liệu chi tiêu khó hiểu, khó chuyển thành hành động.',
  'Người dùng không biết sản phẩm tài chính nào thực sự phù hợp.',
]

const aiFeatures = [
  {
    title: 'Nhập liệu đa phương thức bằng AI',
    description: 'OCR + speech-to-text + NLP giúp người dùng ghi chi tiêu bằng ảnh hóa đơn, giọng nói hoặc chat tự nhiên.',
    tag: 'OCR • Speech-to-Text • NLP',
  },
  {
    title: 'Phân loại và phân tích chi tiêu tự động',
    description: 'Mô hình phân loại giao dịch và engine phân tích hành vi giúp biến dữ liệu thô thành insight dễ hiểu.',
    tag: 'Transaction Classification • Pattern Analysis',
  },
  {
    title: 'Streak, Pockie Xu và voucher',
    description: 'Gamification engine giữ thói quen bền vững bằng nhiệm vụ, phần thưởng và ưu đãi tài chính có động lực thật.',
    tag: 'Gamification Logic • Reward Triggers',
  },
  {
    title: 'AI Pet và nudge cá nhân hóa',
    description: 'Recommendation engine và behavioral nudging đưa ra lời nhắc, gợi ý sản phẩm và phản hồi sát thói quen từng người.',
    tag: 'Recommendation Engine • Personalized Nudges',
  },
]

const userValues = [
  'Giảm thao tác quản lý tài chính mỗi ngày.',
  'Tăng khả năng hiểu tài chính cá nhân theo ngôn ngữ dễ tiếp cận.',
  'Duy trì thói quen tốt qua streak, thưởng và đồng hành cảm xúc.',
  'Hỗ trợ ra quyết định chi tiêu và lựa chọn sản phẩm phù hợp.',
  'Tạo trải nghiệm gần gũi với người trẻ thay vì khô cứng như app ngân hàng truyền thống.',
]

const bankValues = [
  'Tạo điểm chạm thường xuyên với khách hàng trẻ ngoài các thời điểm giao dịch.',
  'Hiểu rõ hơn nhu cầu tài chính giai đoạn đầu của người dùng trẻ.',
  'Thu hút khách hàng mới qua ưu đãi, nhiệm vụ và chiến dịch tài chính có ngữ cảnh.',
  'Định vị ngân hàng như một người đồng hành tài chính thay vì chỉ là đơn vị bán sản phẩm.',
]

const roadmap = [
  {
    phase: 'Giai đoạn 1',
    title: 'XÂY DỰNG MVP',
    time: 'Q3 2026',
    items: ['AI nhập liệu đa phương thức', 'Dashboard chi tiêu dễ hiểu', 'Onboarding theo mục tiêu cá nhân'],
  },
  {
    phase: 'Giai đoạn 2',
    title: 'THỬ NGHIỆM',
    time: 'Q4 2026',
    items: ['Streak và Pockie Xu', 'Voucher từ đối tác tài chính', 'AI Pet đồng hành theo hành vi'],
  },
  {
    phase: 'Giai đoạn 3',
    title: 'MỞ RỘNG QUY MÔ',
    time: 'Q1 2027',
    items: ['Gợi ý tài khoản, thẻ, tiết kiệm', 'Nudge cá nhân hóa theo dữ liệu thật', 'Campaign đồng thương hiệu cùng ngân hàng'],
  },
  {
    phase: 'Giai đoạn 4',
    title: 'ĐỊNH HƯỚNG',
    time: 'Q2 2027',
    items: ['Open API với ngân hàng', 'Phân khúc người dùng theo hành vi', 'Báo cáo insight và tăng trưởng'],
  },
]

const team = [
  {
    name: 'Trần Hải My',
    role: 'Team Leader',
    duty: 'Điều phối dự án, định hướng sản phẩm, quản lý tiến độ và kết nối các thành viên.',
  },
  {
    name: 'Phùng Minh Khoa',
    role: 'Technical Lead',
    duty: 'Thiết kế kiến trúc hệ thống, nghiên cứu và triển khai các thành phần AI.',
  },
  {
    name: 'Trần Khánh Vy',
    role: 'Business Analyst',
    duty: 'Nghiên cứu thị trường, phân tích nhu cầu khách hàng và xây dựng mô hình kinh doanh.',
  },
  {
    name: 'Thái Bảo Trân',
    role: 'Designer & Editor',
    duty: 'Thiết kế giao diện, xây dựng nhận diện sản phẩm và biên tập hồ sơ dự thi.',
  },
]

const phoneCards = [
  {
    label: 'Capture',
    title: 'Ghi chi tiêu tự nhiên',
    lines: ['Chụp hóa đơn để AI đọc dữ liệu', 'Nói nhanh để thêm giao dịch', 'Tự chuẩn hóa danh mục và số tiền'],
  },
  {
    label: 'Insight',
    title: 'Hiểu tiền trong vài giây',
    lines: ['Biểu đồ chi tiêu theo tuần', 'Insight đơn giản, dễ hành động', 'Cảnh báo khi vượt ngân sách'],
  },
  {
    label: 'Nudge',
    title: 'Được nhắc đúng lúc',
    lines: ['AI Pet phản hồi theo thói quen', 'Gợi ý voucher phù hợp', 'Đề xuất sản phẩm theo mục tiêu'],
  },
]

function App() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const elements = Array.from(document.querySelectorAll('[data-reveal]'))
    const revealAll = () => elements.forEach((element) => element.classList.add('is-visible'))
    const fallbackTimer = window.setTimeout(revealAll, 1400)
    elements.slice(0, 2).forEach((element) => element.classList.add('is-visible'))

    if (reducedMotion || !('IntersectionObserver' in window)) {
      revealAll()
      window.clearTimeout(fallbackTimer)
      return () => window.clearTimeout(fallbackTimer)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    )

    elements.forEach((element) => observer.observe(element))
    return () => {
      window.clearTimeout(fallbackTimer)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand" href="#hero" aria-label="Pockie home">
            <span className="brand-mark">P</span>
            <span className="brand-text">Pockie</span>
          </a>
          <nav className="nav">
            <a href="#problem">Vấn đề</a>
            <a href="#solution">Giải pháp</a>
            <a href="#features">Tính năng</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#team">Đội ngũ</a>
          </nav>
          <a className="button ghost hide-mobile" href="#team">
            Liên hệ đội ngũ
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="hero">
          <ArchitecturalScene />
          <div className="container hero-grid">
            <div className="hero-copy" data-reveal>
              <div className="eyebrow">AI financial companion for Gen Z</div>
              <h1>Pockie</h1>
              <p>
                Trợ lý tài chính cá nhân giúp người trẻ ghi chi tiêu, hiểu hành vi tiền bạc và nhận gợi ý phù hợp bằng AI.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#solution">
                  Xem cách hoạt động
                </a>
                <a className="button ghost" href="#roadmap">
                  Xem roadmap
                </a>
              </div>
            </div>

            <div className="hero-showcase" data-reveal>
              <div className="showcase-panel">
                <div className="device-stack">
                  <article className="main-phone">
                    <div className="phone-status">
                      <span>9:41</span>
                      <span className="dynamic-island" />
                      <span>100%</span>
                    </div>
                    <div className="app-card balance-card">
                      <span>Pockie Balance</span>
                      <strong>3.240.000đ</strong>
                      <p>Hôm nay bạn đang chi ít hơn 12% so với trung bình tuần.</p>
                    </div>
                    <div className="pet-nudge">
                      <span>AI Pet</span>
                      <p>Giữ streak thêm 2 ngày để mở voucher cà phê cuối tuần.</p>
                    </div>
                    <div className="mini-chart">
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </article>
                </div>
                <div className="product-caption">
                  <span>Personal finance, distilled.</span>
                  <strong>Ghi nhận. Hiểu. Hành động.</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="proof-section" aria-label="Số liệu thị trường">
          <div className="container proof-grid">
            {painStats.map((stat) => (
              <article className="proof-item" key={stat.value} data-reveal>
                <strong>{stat.value}</strong>
                <p>{stat.title}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="problem">
          <div className="container">
            <div className="section-heading" data-reveal>
              <span className="section-kicker">Vấn đề</span>
              <h2>Người trẻ muốn quản lý tiền tốt hơn, nhưng công cụ hiện tại chưa đủ đơn giản để họ gắn bó.</h2>
            </div>
            <div className="problem-gallery">
              {problems.map((item, index) => (
                <article className="problem-tile" key={item} data-reveal>
                  <span>{`0${index + 1}`}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt-section" id="solution">
          <div className="container two-column">
            <div>
              <div className="section-heading align-left" data-reveal>
                <span className="section-kicker">Giải pháp</span>
                <h2>Pockie giải quyết ba điểm nghẽn lớn nhất trong hành trình tài chính cá nhân.</h2>
              </div>
              <div className="ai-layers-list">
  <div className="ai-layer-item">
    <div className="layer-icon"><i className="fas fa-camera"></i></div>
    <div className="layer-content">
      <h3>1. Lớp Capture</h3>
      <p>Quét hóa đơn bằng OCR hoặc thu âm giọng nói (Speech-to-text) để tự động điền số tiền trong 1 giây.</p>
    </div>
  </div>
  <div className="ai-layer-item">
    <div className="layer-icon"><i className="fas fa-chart-bar" /></div>
    <div className="layer-content">
      <h3>2. Lớp Analysis</h3>
      <p>Mô hình phân loại giao dịch tự động phân tích hành vi và biến dữ liệu thô thành biểu đồ dễ hiểu.</p>
    </div>
  </div>
  <div className="ai-layer-item">
    <div className="layer-icon"><i className="fas fa-robot" /></div>
    <div className="layer-content">
      <h3>3. Lớp Recommendation</h3>
      <p>AI Pet cá nhân hóa đóng vai trò như một người bạn, gửi lời nhắc (Nudge) và gợi ý ưu đãi tài chính.</p>
    </div>
  </div>
</div>
            </div>
            <div className="solution-card" data-reveal>
              <div className="mini-browser">
                <div className="browser-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="browser-tabs">
                  <span>Tracking</span>
                  <span>Insights</span>
                  <span>Rewards</span>
                </div>
              </div>
              <div className="solution-grid">
                <div className="solution-metric">
                  <strong>1 app</strong>
                  <span>logging, insight, nudge và rewards</span>
                </div>
                <div className="solution-metric">
                  <strong>3 lớp AI</strong>
                  <span>capture, analysis, recommendation</span>
                </div>
                <div className="solution-metric wide">
                  <strong>Pockie không chỉ ghi nhận chi tiêu</strong>
                  <span>Nó biến dữ liệu thành sự thấu hiểu và biến hiểu biết thành hành động tài chính phù hợp cho từng người dùng trẻ.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="container">
            <div className="section-heading" data-reveal>
              <span className="section-kicker">4 tính năng chính</span>
              <h2>Mỗi tính năng đều có lý do tồn tại rõ ràng và một lớp AI cụ thể đứng phía sau.</h2>
            </div>
            <div className="feature-grid">
              {aiFeatures.map((feature) => (
                <article className="feature-card" key={feature.title} data-reveal>
                  <div className="feature-tag">{feature.tag}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section flow-section">
          <div className="container two-column flow-layout">
            <div className="loop-card" data-reveal>
              <div className="loop-header">
                <span className="section-kicker">Luồng sử dụng</span>
                <h3>Loop hành vi được thiết kế để người dùng quay lại vì thấy nhẹ nhàng, hữu ích và có phần thưởng.</h3>
              </div>
              <div className="loop-steps">
                <div>1. Ghi lại giao dịch bằng ảnh, giọng nói hoặc nhập nhanh.</div>
                <div>2. AI phân loại, tóm tắt và giải thích dữ liệu chi tiêu.</div>
                <div>3. AI Pet gửi nudge cá nhân hóa cùng nhiệm vụ nhỏ.</div>
                <div>4. Người dùng giữ streak, nhận Xu và thấy tiến bộ mỗi ngày.</div>
              </div>
            </div>
            <div className="video-placeholder" data-reveal>
              <div className="video-orb" />
              <div className="video-text">
                <span>Optional demo loop</span>
                <strong>Có thể thay bằng video mockup sản phẩm sau</strong>
                <p>Khu vực này đã được chừa sẵn để bạn nhét loop video hoặc embed demo khi có asset thật.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section alt-section">
          <div className="container value-grid">
            <article className="value-card" data-reveal>
              <span className="section-kicker">Giá trị cho người dùng</span>
              <h2>Pockie khiến việc quản lý tài chính bớt nặng nề và gần với đời sống thật của người trẻ.</h2>
              <ul className="check-list">
                {userValues.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="value-card dark-card" data-reveal>
              <span className="section-kicker">Giá trị cho ngân hàng</span>
              <h2>Pockie mở ra một điểm chạm mới, nơi ngân hàng có thể đồng hành trước khi bán sản phẩm.</h2>
              <ul className="check-list light">
                {bankValues.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section" id="roadmap">
          <div className="container">
            <div className="section-heading" data-reveal>
              <span className="section-kicker">Roadmap</span>
              <h2>Lộ trình phát triển từ công cụ quản lý chi tiêu thành hệ sinh thái tài chính dành cho người trẻ.</h2>
            </div>
            <div className="timeline">
              {roadmap.map((item) => (
                <article className="timeline-card" key={item.phase} data-reveal>
                  <div className="timeline-top">
                    <span>{item.phase}</span>
                    <strong>{item.time}</strong>
                  </div>
                  <h3>{item.title}</h3>
                  <ul>
                    {item.items.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="team">
        <div className="container footer-inner">
          <div className="footer-heading" data-reveal>
            <span className="section-kicker">Đội ngũ & liên hệ</span>
            <h2>Nhóm phát triển Pockie</h2>
            <p>Nếu bạn muốn thay ảnh thật của từng thành viên, mình đã bố trí sẵn avatar placeholder để chỉ cần đổi dữ liệu hoặc asset là xong.</p>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <article className="team-card" key={member.name} data-reveal>
                <div className="avatar">{member.name.charAt(0)}</div>
                <div className="team-meta">
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                  <p>{member.duty}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="footer-bottom">
            <p>Trang web giới thiệu sản phẩm Pockie và kết nối câu chuyện hợp tác cùng đối tác.</p>
            <a href="mailto:team@pockie.app">team@pockie.app</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
