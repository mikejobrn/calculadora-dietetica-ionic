import { IonItem, IonList, IonText } from '@ionic/react';
import { calcularClassificacaoImc, calcularImc } from '../../api/calculos';

interface ImcProps {
  imc: number;
  classificacao: string;
}

const Imc: React.FC<ImcProps> = ({ imc, classificacao }) => {
  return (
    <IonList lines="full">
      <IonItem>
        <IonText>
          <b>IMC:</b> {imc.toFixed(1)} kg/m²
        </IonText>
      </IonItem>
      <IonItem>
        <IonText>
          <b>Classificação:</b> {classificacao}
        </IonText>
      </IonItem>
    </IonList>
  );
};

export default Imc;
