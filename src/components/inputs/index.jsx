import "./style.css";

export default function Input({ label, placeholder, type = "text" }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}
