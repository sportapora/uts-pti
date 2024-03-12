let data = [];
let id = 1;

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }

  return i;
}

const submitForm = () => {
  let nim = $("#insertDataForm #nim").val();
  let nama = $("#insertDataForm #nama").val();
  let alamat = $("#insertDataForm #alamat").val();

  if (nim != "" && nama != "" && alamat != "") {
    data.push({ id, nim, nama, alamat });
    console.log(data);
    id++;
    $("#table").css("display", "block");

    $("#table").DataTable({
      data: data,
      responsive: true,
    });

    Swal.fire({
      title: "Added!",
      text: "Mahasiswa Baru Telah Ditambahkan!",
      icon: "success",
      confirmButtonText: "Cool",
    });
    $("#insertDataForm").trigger("reset");
  } else {
    Swal.fire({
      title: "Error!",
      text: "Mohon lengkapi form!",
      icon: "error",
      confirmButtonText: "Cool",
    });
  }
};
