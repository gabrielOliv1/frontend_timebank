import '../styles/Services.css';
import ProgrammingService from '../assets/ProgrammingService.svg';
import DesignService from '../assets/DesignService.svg';
import CoachingService from '../assets/CoachingService.svg';

export default function Services() {
    return (
        <section className="main-section">
            <h1 className="headline text-center mb-4 fw-semibold">Junte-se a nós!</h1>
                <div className="row justify-content-center gap-4">
                    <div className="service-board align-content-center col-md-4"
                    style={{ width: '200px', height: '200px' }}>
                        <div className="d-flex flex-column align-items-center justify-content-center gap-3">
                            <img src={ProgrammingService} alt="Serviços de programação" />
                            <h5 className="fw-lighter">Programação</h5>
                        </div>
                    </div>
                    <div className="service-board align-content-center col-md-4"
                    style={{ width: '200px', height: '200px' }}>
                        <div className="d-flex flex-column align-items-center justify-content-center p-4 gap-3">
                            <img src={DesignService} alt="Serviços de design digital" />
                            <h5 className="fw-lighter">Design Digital</h5>
                        </div>
                    </div>
                    <div className="service-board align-content-center col-md-4"
                    style={{ width: '200px', height: '200px' }}>
                        <div className="d-flex flex-column align-items-center justify-content-center p-4 gap-3">
                            <img src={CoachingService} alt="Serviços de Coaching" />
                            <h5 className="fw-lighter">Coaching</h5>
                        </div>
                    </div>
                </div>
        </section>
    )
}