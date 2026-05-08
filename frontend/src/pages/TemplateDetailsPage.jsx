import AIGenerator from "../components/AIGenerator";
import TemplateForm from "../components/TemplateForm";

function TemplateDetailsPage() {

  return (

    <div
      style={{
        padding: "40px"
      }}
    >

      <h1>
        Template Details
      </h1>

      <br />

      <TemplateForm />

      <br />

      <AIGenerator />

    </div>
  );
}

export default TemplateDetailsPage;