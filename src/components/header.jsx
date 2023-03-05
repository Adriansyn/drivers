function Home() {
    function printPage() {
        window.print()
    }
    return (
        <header>
            <nav class="navbar navbar-expand-lg bg-body-tertiary noprint">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">RPC</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={printPage} href="#">Print Report</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Future Development</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="text-center">
                <img src="RPC.jpg" alt="RPC LOGO" class="" />
            <h1>Driver Sign In</h1>
            </div>
            
        </header>
    );
  }
  
  export default Home;