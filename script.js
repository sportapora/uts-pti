let data = [];
let dataIndex = 0;

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

const displayData = (data) => {
  console.log(data);
  if (!$.fn.dataTable.isDataTable("#table"))
    new DataTable("#table", {
      responsive: true,
      data: data,
      columns: [
        { data: "nim" },
        { data: "nama" },
        { data: "alamat" },
        {
          data: null,
          render: (data, type, row) => {
            return `<div class="d-flex"><button type="button" onclik="editData('${data.nim}', '${data.nama}', '${data.alamat}')" class="btn btn-sm me-2 text-white btn-info" data-bs-toggle="modal" data-bs-target="#editDataModal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
            </svg> 
            Edit
            </button>
            <button type="button" class="btn btn-sm mr-2 btn-danger" onclick="deleteData('${data.nim}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eraser-fill" viewBox="0 0 16 16">
              <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293z"/>
              </svg>
              Hapus
            </button>
            </div>`;
          },
        },
      ],
    });
  else if ($.fn.dataTable.isDataTable("#table")) {
    $("#table").empty();
    $("#table").DataTable().destroy();

    new DataTable("#table", {
      responsive: true,
      data: data,
      columns: [
        { data: "nim" },
        { data: "nama" },
        { data: "alamat" },
        {
          data: null,
          render: (data, type, row) => {
            return `<div class="d-flex"><button type="button" onclik="editData('${data.nim}', '${data.nama}', '${data.alamat}')" class="btn btn-sm me-2 text-white btn-info" data-bs-toggle="modal" data-bs-target="#editDataModal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
            </svg> 
            Edit
            </button>
            <button type="button" class="btn btn-sm mr-2 btn-danger" onclick="deleteData('${data.nim}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eraser-fill" viewBox="0 0 16 16">
              <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293z"/>
              </svg>
              Hapus
            </button>
            </div>`;
          },
        },
      ],
    });
  }
};

const submitForm = () => {
  let nim = $("#insertDataForm #nim").val();
  let nama = $("#insertDataForm #nama").val();
  let alamat = $("#insertDataForm #alamat").val();

  if (nim != "" && nama != "" && alamat != "") {
    data.push({ id: dataIndex, nim: nim, nama: nama, alamat: alamat });
    dataIndex++;
    $("#tableData").css("display", "block");

    Swal.fire({
      title: "Added!",
      text: "Mahasiswa Baru Telah Ditambahkan!",
      icon: "success",
      confirmButtonText: "Close",
    });

    displayData(data);
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

const ediData = (nim, nama, alamat) => {};

const deleteData = (nim) => {
  let newArr = [];
  dataIndex = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].nim !== nim) {
      newArr.push(data[i]);

      dataIndex++;
    }
  }
  data = newArr;

  displayData(data);

  Swal.fire({
    title: "Deleted!",
    text: "Data Mahasiswa Berhasil Dihapus!",
    icon: "success",
    confirmButtonText: "Close",
  });
};
