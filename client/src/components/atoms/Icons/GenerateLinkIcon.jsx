import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

export default function PlusIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M8.384 7.402c-.271-.27-.711-.27-.982 0-.812.812-2.136.812-2.948 0L2 4.946c-.394-.393-.61-.916-.61-1.473 0-.558.216-1.08.61-1.474.812-.812 2.133-.812 2.947 0l1.51 1.51c.27.27.71.27.981 0 .271-.272.271-.712 0-.982l-1.509-1.51c-1.353-1.353-3.557-1.353-4.91 0C.36 1.673 0 2.543 0 3.473 0 4.4.36 5.272 1.017 5.928l2.456 2.456c.678.675 1.566 1.014 2.455 1.014s1.777-.339 2.456-1.014c.27-.271.27-.711 0-.982z" />
      <path d="M12.873 7.963l-2.455-2.456c-1.354-1.353-3.557-1.353-4.911 0-.27.27-.27.711 0 .982.27.27.711.27.982 0 .812-.812 2.132-.812 2.947 0l2.456 2.455c.394.394.61.916.61 1.474 0 .558-.216 1.08-.61 1.474-.788.787-2.16.787-2.948 0l-1.507-1.51c-.27-.27-.71-.27-.981 0-.27.271-.27.711 0 .982l1.51 1.507c.655.656 1.528 1.017 2.455 1.017s1.799-.361 2.455-1.017c.656-.657 1.017-1.529 1.017-2.456-.002-.927-.363-1.796-1.02-2.452z" />
    </SvgIcon>
  );
}
