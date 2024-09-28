import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import DadosPaciente from '../components/dados-paciente/DadosPaciente';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculadora Dietética</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Calculadora Dietética</IonTitle>
          </IonToolbar>
        </IonHeader>
        <DadosPaciente />
      </IonContent>
    </IonPage>
  );
};

export default Home;
