import Painting from "./Painting";

export default function Gallery() {
  return (
    <div>
      <Painting img_url="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F5b87fa9a-112a-4c4d-a7c9-d368266319d4_1426x1445.webp" />
      <Painting img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/John_Everett_Millais_-_Ophelia_-_Google_Art_Project.jpg/1200px-John_Everett_Millais_-_Ophelia_-_Google_Art_Project.jpg" />
      <Painting img_url="https://d3d00swyhr67nd.cloudfront.net/h300/collection/BBO/MERL/BBO_MERL_M_20-001.jpg" />
      <Painting img_url="https://cdn.britannica.com/45/1245-004-676A6721/Kanagawa-Wave-woodblock-colour-print-series-part.jpg" />
    </div>
  );
}
