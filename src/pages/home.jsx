const Home = () => {
  return (
    <section className="home-container">

      <header className="home-header">
        <h1>Bienvenido a <span className="highlight">Titanfit Pro</span></h1>
        <p className="home-subtitle">
          Tu plataforma integral para transformar tu cuerpo y mente con disciplina, fuerza y constancia.
        </p>
      </header>

      <section className="about-mission">
        <div className="about-text">
          <h2>¿Quiénes somos?</h2>
          <p>
            En <strong>Titanfit</strong> somos un equipo dedicado a promover el bienestar físico y mental a través de planes personalizados, seguimiento y motivación constante.
          </p>
          <h3>Nuestra Misión</h3>
          <p>
            Brindar las mejores herramientas digitales para que cada usuario pueda superar sus límites y alcanzar sus objetivos fitness.
          </p>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=800&q=80" alt="Fitness" />
        </div>
      </section>

      <section className="features">
        <h2>¿Qué encontrarás en Titanfit?</h2>
        <ul className="features-list">
          <li>📅 Planificación de rutinas personalizadas</li>
          <li>📈 Registro detallado de progreso físico</li>
          <li>🧠 Consejos de nutrición y bienestar</li>
          <li>💪 Entrenamiento desde cualquier dispositivo</li>
          <li>👥 Comunidad y soporte constante</li>
        </ul>
      </section>

      <section className="routines">
        <h2>Rutinas Destacadas</h2>
        <div className="routines-grid">
          <article className="routine-card">
            <h3>🔥 Full Body Express</h3>
            <p>30 minutos diarios para activar todo tu cuerpo con ejercicios dinámicos y efectivos.</p>
          </article>
          <article className="routine-card">
            <h3>🏋️ Fuerza y Volumen</h3>
            <p>Programa intensivo para ganar masa muscular y fuerza progresivamente.</p>
          </article>
          <article className="routine-card">
            <h3>🧘 Core y Flexibilidad</h3>
            <p>Ejercicios funcionales para mejorar movilidad, estabilidad y resistencia.</p>
          </article>
        </div>
      </section>

    </section>
  );
};

export default Home;
