import { IonInput, IonList, IonText } from '@ionic/react';
import './DadosPaciente.css';

const DadosPaciente: React.FC = () => {
  return (
    <div id="container">
      <IonList lines="none">
        <IonInput type="number" inputMode="decimal" fill="outline" placeholder="Peso">
          <IonText slot="end">kg</IonText>
        </IonInput>

        <IonInput type="number" inputMode="decimal" fill="outline" placeholder="Altura">
          <IonText slot="end">m</IonText>
        </IonInput>

        <IonInput type="number" inputMode="decimal" fill="outline" placeholder="Idade">
          <IonText slot="end">anos</IonText>
        </IonInput>
      </IonList>
    </div>
  );
};

export default DadosPaciente;
