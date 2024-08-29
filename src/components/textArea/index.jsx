import "./style.css";

export default function Textarea({ label, placeholder }) {
    return (
      <div className="form-group full-width">
        <label>{label}</label>
        <textarea placeholder={placeholder}></textarea>
      </div>
    );
  }