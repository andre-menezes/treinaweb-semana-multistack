import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import SafeEnvironment from "ui/components/feedback/safeEnvironment/safeEnvironment";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seus endereços e veja todos os profissionais da sua região"
        }
      />
      <UserInformation
        description={"Botucatu / SP"}
        name={"André Menezes"}
        picture={"https://github.com/andre-menezes.png"}
        rating={4}
      />
    </div>
  );
}
