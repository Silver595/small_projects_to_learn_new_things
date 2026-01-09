from worker import run_once


def test_run_once():
    assert run_once() is True
