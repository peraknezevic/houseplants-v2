export default function InputText({ name }) {
  return (
    <input
      type="text"
      defaultValue={article?.title}
      placeholder="Title"
      className="input input-bordered w-full"
    />
  );
}
