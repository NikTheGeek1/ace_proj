import requests
from flask import Blueprint

jobs_blueprint = Blueprint("jobs", __name__)

@jobs_blueprint.route("/api/jobs", methods=["get"])
def get_data():
    return requests.get('https://www.playmolecule.com/Kdeep/listAllJobs').content