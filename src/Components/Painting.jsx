export default function Painting(props) {
  return (
    <div>
      <img src={props.img_url} />
    </div>
  );
}

//example of a destructured version

// export default function Painting({img_url}) {
//     return (
//       <div>
//         <img src={img_url}
//         />
//       </div>
//     );
//   }
