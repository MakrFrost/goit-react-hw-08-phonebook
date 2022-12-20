export default function CallImg({ number }) {
  return (
    <a href={`tel:${number}`}>
      <img
        src="https://www.svgrepo.com/show/59023/phone-call.svg"
        alt="call to contact"
        width="30px"
      />
    </a>
  );
}
